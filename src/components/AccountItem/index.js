import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://genk.mediacdn.vn/thumb_w/690/2019/12/26/photo-1-15773329973071527377344.jpg"
                alt="Doan"
            />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Vũ Ngọc Đoàn</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>vungocdoan</span>
            </div>
        </div>
    );
};

export default AccountItem;
