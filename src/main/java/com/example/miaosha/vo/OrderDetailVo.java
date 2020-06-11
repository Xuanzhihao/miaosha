package com.example.miaosha.vo;

import com.example.miaosha.domain.MiaoshaUser;
import com.example.miaosha.domain.OrderInfo;
import lombok.Data;

@Data
public class OrderDetailVo {
    private GoodsVo goods;
    private OrderInfo order;
}
