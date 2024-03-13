import React from "react";
import { Card } from "antd";

const ItemList = ({ item }) => {
    const { Meta } = Card;

    return (
        <div>
            <Card
                hoverable
                style={{ width: 240, marginBottom: 20 }}
                cover={
                    <img
                        style={{ height: 250 }}
                        alt={item.name}
                        src={item.image}
                    />
                }
            >
                <Meta title={item.name} />
            </Card>
        </div>
    );
};

export default ItemList;
