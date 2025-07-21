//package com.resume.backend.service;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.json.JSONObject;
//import org.springframework.ai.chat.client.ChatClient;
//import org.springframework.ai.chat.prompt.Prompt;
//import org.springframework.core.io.ClassPathResource;
//import org.springframework.stereotype.Service;
//
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.util.HashMap;
//import java.util.Map;
//
//@Service
//public class ResumeServiceImpl implements ResumeService {
//
//    private ChatClient chatClient;
//
//    public ResumeServiceImpl(ChatClient.Builder builder){
//        this.chatClient = builder.build();
//    }
//
//    @Override
//    public Map<String, Object> generateResumeResponce(String userResumeDescription) throws IOException {
//        String promptString = this.loadFPromptFromFile("resume_prompt.txt");
//        String promptContent = this.putValuesToTemplate(promptString, Map.of(
//                "userDescription", userResumeDescription
//        ));
//        Prompt prompt = new Prompt(promptContent);
//        String responce = chatClient.prompt(prompt).call().content();
//        Map<String, Object> stringObjectMap = parseMultipleResponses(responce);
//        return stringObjectMap;
//    }
//
//    String loadFPromptFromFile(String fileName) throws IOException{
//        Path path = new ClassPathResource(fileName).getFile().toPath();
//        return Files.readString(path);
//    }
//
//    String putValuesToTemplate(String template, Map<String, String> values){
//        for (Map.Entry<String, String> entry:values.entrySet()){
//            template=template.replace("{{"+entry.getKey()+"}}", entry.getValue());
//        }
//        return template;
//    }
//
//    public static Map<String, Object> parseMultipleResponses(String response) {
//        Map<String, Object> jsonResponse = new HashMap<>();
//
//        // Extract content inside <think> tags
//        int thinkStart = response.indexOf("<think>") + 7;
//        int thinkEnd = response.indexOf("</think>");
//        if (thinkStart != -1 && thinkEnd != -1) {
//            String thinkContent = response.substring(thinkStart, thinkEnd).trim();
//            jsonResponse.put("think", thinkContent);
//        } else {
//            jsonResponse.put("think", null); // Handle missing <think> tags
//        }
//
//        // Extract content that is in JSON format
//        int jsonStart = response.indexOf("```json") + 7; // Start after ```json
//        int jsonEnd = response.lastIndexOf("```");       // End before ```
//        if (jsonStart != -1 && jsonEnd != -1 && jsonStart < jsonEnd) {
//            String jsonContent = response.substring(jsonStart, jsonEnd).trim();
//            try {
//                // Convert JSON string to Map using Jackson ObjectMapper
//                ObjectMapper objectMapper = new ObjectMapper();
//                Map<String, Object> dataContent = objectMapper.readValue(jsonContent, Map.class);
//                jsonResponse.put("data", dataContent);
//            } catch (Exception e) {
//                jsonResponse.put("data", null); // Handle invalid JSON
//                System.err.println("Invalid JSON format in the response: " + e.getMessage());
//            }
//        } else {
//            jsonResponse.put("data", null); // Handle missing JSON
//        }
//
//        return jsonResponse;
//    }
//
//}

package com.resume.backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

@Service
public class ResumeServiceImpl implements ResumeService {

    private final ChatClient chatClient;

    public ResumeServiceImpl(ChatClient.Builder builder) {
        // Default model: deepseek-r1:7b should be set in application.properties
        this.chatClient = builder.build();
    }

    @Override
    public Map<String, Object> generateResumeResponce(String userResumeDescription) throws IOException {
        String promptTemplate = loadPromptFromFile("resume_prompt.txt");

        String filledPrompt = fillTemplate(promptTemplate, Map.of(
                "userDescription", userResumeDescription
        ));

        Prompt prompt = new Prompt(filledPrompt);
        String response = chatClient.prompt(prompt).call().content();

        return parseResponseToJson(response);
    }

    private String loadPromptFromFile(String fileName) throws IOException {
        Path path = new ClassPathResource(fileName).getFile().toPath();
        return Files.readString(path);
    }

    private String fillTemplate(String template, Map<String, String> values) {
        for (Map.Entry<String, String> entry : values.entrySet()) {
            template = template.replace("{{" + entry.getKey() + "}}", entry.getValue());
        }
        return template;
    }

    private Map<String, Object> parseResponseToJson(String response) {
        Map<String, Object> result = new HashMap<>();

        // Extract <think> section
        int thinkStart = response.indexOf("<think>") + 7;
        int thinkEnd = response.indexOf("</think>");
        if (thinkStart >= 7 && thinkEnd > thinkStart) {
            result.put("think", response.substring(thinkStart, thinkEnd).trim());
        } else {
            result.put("think", null);
        }

        // Extract ```json block
        int jsonStart = response.indexOf("```json") + 7;
        int jsonEnd = response.lastIndexOf("```");

        if (jsonStart >= 7 && jsonEnd > jsonStart) {
            String jsonContent = response.substring(jsonStart, jsonEnd).trim();
            try {
                ObjectMapper objectMapper = new ObjectMapper();
                Map<String, Object> jsonMap = objectMapper.readValue(jsonContent, Map.class);
                result.put("data", jsonMap);
            } catch (Exception e) {
                result.put("data", null);
                System.err.println("Failed to parse JSON block: " + e.getMessage());
            }
        } else {
            result.put("data", null);
        }

        return result;
    }
}
