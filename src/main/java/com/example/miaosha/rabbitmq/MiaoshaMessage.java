package com.example.miaosha.rabbitmq;

import com.example.miaosha.domain.MiaoshaUser;
import lombok.Data;

@Data
public class MiaoshaMessage {
    private MiaoshaUser user;
    private long goodsId;
}
