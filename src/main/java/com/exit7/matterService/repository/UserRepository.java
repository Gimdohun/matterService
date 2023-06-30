package com.exit7.matterService.repository;

import com.exit7.matterService.dto.UserDTO;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;


@Repository
@EnableMongoRepositories
public interface UserRepository extends MongoRepository<UserDTO, String> {
}
