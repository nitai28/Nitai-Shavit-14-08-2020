import React from 'react';
import {
    Modal,
    Form,
    Input,
    Select,
    DatePicker,
    InputNumber,
} from 'antd';
import moment from "moment";

const AddItemModalForm = ({showModal, closeModal, onFormSubmit}) => {
    const [form] = Form.useForm();

    const handleFinishForm = () => {
        form.validateFields()
            .then((values) => {
                values.deliveryEstDate = moment(values.deliveryEstDate).unix() * 1000;
                onFormSubmit(values);
                form.resetFields();
                closeModal();
            })
    };


    return (
        <div>
            <Modal
                title="Add new item"
                visible={showModal}
                okText="submit"
                okButtonProps={{form: 'add-item-form', key: 'submit', htmlType: 'submit'}}
                onCancel={closeModal}
            >
                <Form
                    labelCol={{span: 12,}}
                    wrapperCol={{span: 14}}
                    layout="vertical"
                    form={form}
                    id='add-item-form'
                    size={"small"}
                    onFinish={handleFinishForm}
                >
                    <Form.Item name="itemName" rules={[{required: true}]} label="Item name">
                        <Input/>
                    </Form.Item>
                    <Form.Item name="storeName" rules={[{required: true}]} label="Store name">
                        <Input/>
                    </Form.Item>
                    <Form.Item name="price"
                               rules={[{
                                   required: true, type: "number",
                                   min: 1,
                               }]}
                               label="Price">
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item name="currencyType"
                               rules={[{required: true}]}
                               label="Currency">
                        <Select>
                            <Select.Option value="usd">$(USD)</Select.Option>
                            <Select.Option value="nis">₪(ILS)</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="deliveryEstDate"
                               rules={[{
                                   required: true,
                                   type: "date",
                                   min: Date.now(),
                                   message: "date must be later then now"
                               }]}
                               label="Delivery EST Date">
                        <DatePicker disabledDate={(currentDate) => moment(currentDate).unix() < Date.now() / 1000}/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default AddItemModalForm;
