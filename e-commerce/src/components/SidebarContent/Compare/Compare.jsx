import HeaderSidebar from '@componentsSidebar/HeaderSidebar/HeaderSidebar';
import CommonWrapper from '@componentsSidebar/CommonWrapper.module.scss';
import { SyncIcon } from '@icons/Icons'
import config from '@config/index';
function Compare() {
    return (
        <div className={CommonWrapper.wrapper}>
            <HeaderSidebar
                to={config.routes.compare}
                icon={<SyncIcon width={24} height={24} strokeWidth={0.8} />}
                title="Compare"
            />
        </div>
    );
}

export default Compare;