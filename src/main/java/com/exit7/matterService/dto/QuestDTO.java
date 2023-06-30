package com.exit7.matterService.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@NoArgsConstructor
@Document(collection = "quest")
public class QuestDTO {
    @Id
    private String id;
    private String title;
    private String answer;
    private String categoryNo;


}
