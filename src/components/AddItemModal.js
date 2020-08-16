import React, {useState, useEffect} from 'react';
import {
    Modal,
    Form,
    Input,
    Select,
    DatePicker,
    InputNumber,
} from 'antd';

const AddItemModal = ({showModal}) => {
    const [form] = Form.useForm();

    console.log(form)

    const handleOk = () => null;
    const confirmLoading = () => null;
    const handleCancel = () => null;
    return (
        <div>
            <Modal
                title="Add new item"
                visible={showModal}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form
                    labelCol={{
                        span: 10,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="vertical"
                    initialValues={{
                        size: "small",
                    }}
                    onValuesChange={(store) => {
                        console.log(store)
                    }}
                    // onV
                    size={"small"}
                >
                    <Form.Item required label="Item name">
                        <Input/>
                    </Form.Item>
                    <Form.Item required label="Store name">
                        <Input/>
                    </Form.Item>
                    <Form.Item required label="Price">
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item required label="Currency">
                        <Select>
                            <Select.Option value="usd">$(USD)</Select.Option>
                            <Select.Option value="nis">₪(NIS)</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item required label="Delivery EST Date">
                        <DatePicker/>
                    </Form.Item>

                </Form>
            </Modal>
        </div>
    );
};

export default AddItemModal;
