import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import axios from "axios";
import { Col, Row } from "antd";
import ItemList from "../components/ItemList";

const Homepage = () => {
    const [itemsData, setItemsData] = useState([]);

    // useEffect
    useEffect(() => {
        const getAllItems = async () => {
            try {
                const { data } = await axios.get("api/items/get-item");
                setItemsData(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        getAllItems();
    }, []);

    return (
        <DefaultLayout>
            {/* <h1>Home Page</h1> */}
            <Row gutter={[16, 16]}>
                {itemsData.map((item) => (
                    <Col xs={24} sm={12} md={8} lg={6} xl={4} key={item.id} className="mb-4">
                        <ItemList item={item} />
                    </Col>
                ))}
            </Row>
        </DefaultLayout>
    );
};

export default Homepage;
