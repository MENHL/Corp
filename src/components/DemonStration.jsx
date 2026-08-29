import '../style/antdesign.scss';
import './style/DemonStration.scss';
import { useState } from 'react';
import { ConfigProvider, Button, DatePicker, message } from 'antd'; // 引入 message
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';

dayjs.locale('zh-cn');

function DemonStration() {
    const [size] = useState('large');
    const [selectedProduct, setSelectedProduct] = useState('产品开发');
    const [selectedTime, setSelectedTime] = useState('上午 10：00');
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    // 表单字段状态
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
    });

    // 产品列表
    const products = ['产品开发', '数据智能', '云基础设施', '技术咨询'];
    // 演示时间段
    const timeSlots = ['上午 10：00', '下午 14：00', '下午 16：00'];

    // 正则校验
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PHONE_REGEX = /^1[3-9]\d{9}$/;

    // 处理输入变化
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // 处理产品点击
    const handleProductClick = (product) => setSelectedProduct(product);
    // 处理时间段点击
    const handleTimeClick = (time) => setSelectedTime(time);
    // 处理日期选择
    const handleDateChange = (date) => setSelectedDate(date);

    // 提交处理
    const handleSubmit = (e) => {
        e.preventDefault();

        const { fullName, email, phone, company } = form;

        // 1. 校验姓名
        if (!fullName.trim()) {
            message.warning('请输入您的姓名');
            return;
        }

        // 2. 校验邮箱
        if (!email.trim()) {
            message.warning('请输入您的邮箱');
            return;
        }
        if (!EMAIL_REGEX.test(email)) {
            message.warning('请输入有效的邮箱地址');
            return;
        }

        // 3. 校验手机号（必填）
        if (!phone.trim()) {
            message.warning('请输入您的手机号');
            return;
        }
        if (!PHONE_REGEX.test(phone)) {
            message.warning('请输入有效的手机号（11位数字，以1开头）');
            return;
        }

        // 全部校验通过，执行提交逻辑
        message.success('预约提交成功！我们会尽快与您联系。');

        // 清空所有输入框
        setForm({
            fullName: '',
            email: '',
            phone: '',
            company: '',
        });

        // 重置选择项
        setSelectedProduct('产品开发');
        setSelectedTime('上午 10：00');
        setSelectedDate(dayjs());
        // 可选：关闭日期面板
        setIsDatePickerOpen(false);
    };

    return (
        <div id='DemonStration' className='clone banner f'>
            <div className='contacts__title m'>
                <h1 className='l_title'>预约产品演示</h1>
                <p className='s_title'>30分钟1对1在线演示，看看 Corp 如何解决你的业务问题</p>
            </div>
            <div className='contacts_form'>
                <div className="form">
                    <form className="form-grid" onSubmit={handleSubmit} noValidate>
                        {/* 姓名 */}
                        <div className="field-group">
                            <label className="field-label" htmlFor="fullName">
                                姓名 <span className="required" aria-hidden="true">*</span>
                            </label>
                            <input
                                className="field-input"
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="请输入您的姓名"
                                required
                                autoComplete="name"
                                value={form.fullName}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* 邮箱 */}
                        <div className="field-group">
                            <label className="field-label" htmlFor="email">
                                邮箱 <span className="required" aria-hidden="true">*</span>
                            </label>
                            <input
                                className="field-input"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="name@company.com"
                                required
                                autoComplete="email"
                                value={form.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* 联系电话 */}
                        <div className="field-group">
                            <label className="field-label" htmlFor="phone">
                                联系电话 <span className="required" aria-hidden="true">*</span>
                            </label>
                            <input
                                className="field-input"
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="请输入您的手机号"
                                autoComplete="tel"
                                inputMode="numeric"
                                value={form.phone}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* 公司名称 */}
                        <div className="field-group">
                            <label className="field-label" htmlFor="company">公司名称</label>
                            <input
                                className="field-input"
                                type="text"
                                id="company"
                                name="company"
                                placeholder="请输入您的公司名称"
                                autoComplete="organization"
                                value={form.company}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* 感兴趣的产品 */}
                        <div className="field-group full-width">
                            <label className="field-label">感兴趣的产品</label>
                            <div className="btn-box">
                                {products.map((product) => {
                                    const isSelected = selectedProduct === product;
                                    return (
                                        <ConfigProvider wave={{ disabled: true }} key={product}>
                                            <Button
                                                color="default"
                                                variant="solid"
                                                size={size}
                                                shape="round"
                                                onClick={() => handleProductClick(product)}
                                                style={{
                                                    backgroundColor: isSelected ? '#000000' : 'transparent',
                                                    color: isSelected ? '#ffffff' : 'inherit',
                                                    borderColor: isSelected ? '#000000' : '#d9d9d9',
                                                    transition: 'all 0.3s'
                                                }}
                                            >
                                                {product}
                                            </Button>
                                        </ConfigProvider>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 期望日期 */}
                        <div className="field-group full-width">
                            <label className="field-label">
                                期望日期 <span className="required" aria-hidden="true">*</span>
                            </label>
                            <ConfigProvider locale={zhCN}>
                                <DatePicker
                                    className="field-input"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    format="YYYY年MM月DD日 (dddd)"
                                    style={{ width: '100%' }}
                                    placeholder="请选择日期"
                                    allowClear={false}
                                    open={isDatePickerOpen}
                                    onOpenChange={(open) => setIsDatePickerOpen(open)}
                                    suffixIcon={
                                        isDatePickerOpen ? <DownOutlined /> : <RightOutlined />
                                    }
                                    locale={zhCN}
                                    placement="bottomLeft"
                                    getPopupContainer={(trigger) => trigger.parentNode}
                                />
                            </ConfigProvider>
                        </div>

                        {/* 演示时段 */}
                        <div className="field-group full-width">
                            <label className="field-label">演示时段</label>
                            <div className="btn-box">
                                {timeSlots.map((time) => {
                                    const isSelected = selectedTime === time;
                                    return (
                                        <ConfigProvider wave={{ disabled: true }} key={time}>
                                            <Button
                                                color="default"
                                                variant="solid"
                                                size={size}
                                                shape="round"
                                                onClick={() => handleTimeClick(time)}
                                                style={{
                                                    backgroundColor: isSelected ? '#000000' : 'transparent',
                                                    color: isSelected ? '#ffffff' : 'inherit',
                                                    borderColor: isSelected ? '#000000' : '#d9d9d9',
                                                    transition: 'all 0.3s'
                                                }}
                                            >
                                                {time}
                                            </Button>
                                        </ConfigProvider>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 提交按钮 */}
                        <div className="submit-wrapper">
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                block
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#14344d';
                                    e.currentTarget.style.borderColor = '#14344d';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#000000';
                                    e.currentTarget.style.borderColor = '#000000';
                                }}
                            >
                                确认预约
                            </Button>
                        </div>

                        {/* 附加说明 */}
                        <div className="field-group full-width" style={{ marginTop: '-10px' }}>
                            <p style={{ fontSize: '13px', color: '#6b7a8f', textAlign: 'center' }}>
                                提交后我们将发送确认邮件与日历邀请，可随时免费改期。
                            </p>
                        </div>
                    </form>
                </div>
                {/* 右侧区域 */}
                <div className='atlas'>
                    <h1 className='title'>演示中你将获得</h1>
                    <ul className='achievement'>
                        <li className='list'>
                            <div className='box'>✓</div>
                            <p className='text'>30分钟1对1产品演示，聚焦你的业务场景</p>
                        </li>
                        <li className='list'>
                            <div className='box'>✓</div>
                            <p className='text'>解决方案专家现场答疑，含架构与报价建议</p>
                        </li>
                        <li className='list'>
                            <div className='box'>✓</div>
                            <p className='text'>演示后提供定制方案文档，无任何附加义务</p>
                        </li>
                    </ul>
                    <div className='speech'>
                        <p className='content'>「演示完全围绕我们的业务场景展开，第二天就收到了定制方案，专业程度令人印象深刻。」</p>
                        <p className='speaker'>——某零售集团技术负责人</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DemonStration;