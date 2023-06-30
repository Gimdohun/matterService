package com.exit7.matterService.repository;

import com.exit7.matterService.dto.QuestDTO;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


@EnableMongoRepositories
public interface QuestRepository  extends MongoRepository<QuestDTO, String> {
}
