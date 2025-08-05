import InputCommon from '@components/InputCommon/InputCommon'
import Button from '@components/Button/Button'
function ForgotPassword() {
    return (
        <div>
            <h2>Quên mật khẩu</h2>
            <p>Vui lòng nhập địa chỉ email của bạn để nhận liên kết đặt lại mật khẩu.</p>
            <InputCommon label="Email" type="email" isRequired />
            <Button title="Gửi" />
        </div>
    )
}

export default ForgotPassword