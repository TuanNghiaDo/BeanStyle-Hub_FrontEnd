import CommonWrapper from '@componentsSidebar/CommonWrapper.module.scss';
import HeaderSidebar from '@componentsSidebar/HeaderSidebar/HeaderSidebar';
import { HeartIcon } from '@icons/Icons';
import config from '@config/index';
function WishList() {
    return (
        <div className={CommonWrapper.wrapper}>
            <HeaderSidebar
                to={config.routes.wish_list}
                icon={<HeartIcon width={32} height={32} strokeWidth={0.6} />}
                title="Wish List"
            />
        </div>
    );
}
export default WishList;