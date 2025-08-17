import HeaderSidebar from '@componentsSidebar/HeaderSidebar/HeaderSidebar';
import StylesCommon from '@componentsSidebar/StylesCommon.module.scss';
import { SyncIcon } from '@icons/Icons'
import config from '@config/index';
import ContentSidebar from '@componentsSidebar/ContentSidebar/ContentSidebar';
import Button from '@components/Button/Button';
function Compare() {
    return (
        <div className={StylesCommon.wrapper}>
            <HeaderSidebar
                to={config.routes.compare}
                icon={<SyncIcon width={24} height={24} strokeWidth={0.8} />}
                title="Compare"
            />
            <ContentSidebar />
            <Button
                children="Xem chi tiết"
                primary
                className={StylesCommon.btn}
            />
        </div>
    );
}

export default Compare;