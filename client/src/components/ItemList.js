import React from "react";
import { Button, Card } from "antd";

const ItemList = ({ item }) => {
    const { Meta } = Card;

    return (
        <div>
            <Card
                // hoverable
                style={{ width: 270, marginBottom: 20 }}
                cover={
                    <img
                        style={{ height: 200 }}
                        alt={item.name}
                        src={item.image}
                    />
                }
            >
                <Meta title={item.name} />
                <div className="item-button">
                    <Button  style={{ marginTop: "10px",width: "200px", backgroundColor: "green", color: "white"}}>Add to cart</Button>
                </div>
            </Card>
        </div>
    );
};

export default ItemList;
