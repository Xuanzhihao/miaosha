package com.example.miaosha.controller;

import com.example.miaosha.domain.User;
import com.example.miaosha.redis.RedisService;
import com.example.miaosha.redis.UserKey;
import com.example.miaosha.result.Result;
import com.example.miaosha.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {
    @Autowired
    RedisService redisService;

    @Autowired
    UserService userService;

    @GetMapping("/db/get")
    public Result<User> dbGet() {
        User user = userService.getById(1);
        return Result.success(user);
    }

    @GetMapping("redis/get")
    public Result<User> redisGet(){
        User user = redisService.get(UserKey.getById, "test", User.class);
        return Result.success(user);
    }

    @GetMapping("redis/set")
    public Result<Boolean> redisSet(){
        User user = new User();
        user.setId(1);
        user.setName("ChihHao");
        boolean ret = redisService.set(UserKey.getById, "test", user);
        return Result.success(ret);
    }

}
