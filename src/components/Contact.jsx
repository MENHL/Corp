import '../style/antdesign.scss';
import './style/contact.scss';

import { DownOutlined, UpOutlined, PhoneOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Select, Input, message } from 'antd';
import Map from './map';

const { TextArea } = Input;

// ==================== 静态数据 ====================

const CONTACT_INFO = {
    hotline: '111-222-3333',
    businessEmail: 'hello@123456.com',
    officeAddress: '北京市xx区xx园路x号x座xx层',
};

const INQUIRY_OPTIONS = [
    { value: 'product', label: '产品咨询' },
    { value: 'service', label: '服务咨询' },
    { value: 'support', label: '技术支持' },
    { value: 'other', label: '其他' },
];

const INITIAL_FORM_STATE = {
    fullName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'product',
    messageContent: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^1[3-9]\d{9}$/;

// 表单字段配置
const FORM_FIELDS = [
    { key: 'fullName', label: '姓名', required: true, type: 'text', placeholder: '请输入您的姓名', autoComplete: 'name' },
    { key: 'email', label: '邮箱', required: true, type: 'email', placeholder: 'name@company.com', autoComplete: 'email' },
    { key: 'phone', label: '联系电话', required: false, type: 'tel', placeholder: '请输入您的手机号', autoComplete: 'tel', inputMode: 'numeric' },
    { key: 'company', label: '公司名称', required: false, type: 'text', placeholder: '请输入您的公司名称', autoComplete: 'organization' },
];

// 联系信息卡片配置
const CONTACT_CARDS = [
    { key: 'hotline', icon: <PhoneOutlined />, title: '服务热线', value: CONTACT_INFO.hotline },
    { key: 'business', icon: <PhoneOutlined />, title: '商务合作', value: CONTACT_INFO.businessEmail },
    { key: 'address', icon: null, title: '办公地址', value: CONTACT_INFO.officeAddress, isAddress: true },
];

// ==================== 组件 ====================

function Contact() {
    const [form, setForm] = useState(INITIAL_FORM_STATE);
    const [selectOpen, setSelectOpen] = useState(false);

    const handleChange = (key) => (e) => {
        const value = e?.target ? e.target.value : e;
        setForm(prev => ({ ...prev, [key]: value }));
    };

    // 手机号输入过滤
    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        setForm(prev => ({ ...prev, phone: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fullName, email, phone, messageContent } = form;

        if (!fullName.trim()) { message.warning('请输入您的姓名'); return; }
        if (!email.trim() || !EMAIL_REGEX.test(email)) { message.warning('请输入有效的邮箱地址'); return; }
        if (phone.trim() && !PHONE_REGEX.test(phone)) { message.warning('请输入有效的手机号（11位数字，以1开头）'); return; }
        if (!messageContent.trim()) { message.warning('请输入留言内容'); return; }

        message.success('提交成功！我们会尽快与您联系。');
        setForm(INITIAL_FORM_STATE);
    };

    // 渲染表单字段
    const renderField = (field) => {
        const isFullWidth = field.key === 'inquiryType' || field.key === 'messageContent';
        const value = form[field.key];

        if (field.key === 'inquiryType') {
            return (
                <div className="field-group full-width" key={field.key}>
                    <label className="field-label" htmlFor={field.key}>咨询类型</label>
                    <Select
                        className="field-select"
                        id={field.key}
                        value={value}
                        onChange={handleChange(field.key)}
                        placeholder="请选择咨询类型"
                        options={INQUIRY_OPTIONS}
                        suffixIcon={selectOpen ? <UpOutlined /> : <DownOutlined />}
                        onOpenChange={(open) => setSelectOpen(open)}
                    />
                </div>
            );
        }

        if (field.key === 'messageContent') {
            return (
                <div className="field-group full-width" key={field.key}>
                    <label className="field-label" htmlFor={field.key}>
                        留言内容 <span className="required">*</span>
                    </label>
                    <TextArea
                        className="field-textarea"
                        id={field.key}
                        placeholder="请描述您的业务需求或希望解决的问题.."
                        value={value}
                        onChange={handleChange(field.key)}
                        autoSize={{ minRows: 3, maxRows: 5 }}
                        style={{ maxHeight: 150 }}
                    />
                </div>
            );
        }

        const isPhone = field.key === 'phone';
        return (
            <div className="field-group" key={field.key}>
                <label className="field-label" htmlFor={field.key}>
                    {field.label} {field.required && <span className="required">*</span>}
                </label>
                <input
                    className="field-input"
                    type={field.type}
                    id={field.key}
                    placeholder={field.placeholder}
                    required={field.required}
                    autoComplete={field.autoComplete}
                    inputMode={field.inputMode}
                    value={value}
                    onChange={isPhone ? handlePhoneChange : handleChange(field.key)}
                />
            </div>
        );
    };

    return (
        <div id='contacts' className='clone banner f'>
            <div className='contacts__title m'>
                <h1 className='l_title'>联系我们</h1>
                <p className='s_title'>留下你的需求，我们的专家将在24小时内与你联系</p>
            </div>
            <div className='contacts_form'>
                <div className="form">
                    <form className="form-grid" noValidate onSubmit={handleSubmit}>
                        {FORM_FIELDS.map(renderField)}
                        {renderField({ key: 'inquiryType' })}
                        {renderField({ key: 'messageContent' })}
                        <div className="submit-wrapper">
                            <button className="btn-submit" type="submit">提交留言</button>
                        </div>
                    </form>
                </div>
                <div className='atlas'>
                    <div className='box'>
                        {CONTACT_CARDS.map(card => (
                            <div className={`items ${card.isAddress ? 'location' : 'server'}`} key={card.key}>
                                {card.icon && <div className='icon'>{card.icon}</div>}
                                <div className='title-box'>
                                    <div className='title'>{card.title}</div>
                                    <div className='sub-title'>{card.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='items maps' style={{ borderRadius: '12px', overflow: 'hidden' }}>
                        <Map style={{ height: '100%', width: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;