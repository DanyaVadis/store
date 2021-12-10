import React from 'react';
import classes from './footer.module.css';
import { Link } from 'react-router-dom';
import Button from '../../UI/button';
import logo from './logo.png';

const Footer = props => {
    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.footerTop}>
                    <div className={classes.footerMenu}>
                        <div className={classes.footerItem}>
                            <div>
                                <h3>Каталог</h3>
                            </div>
                            <ul className={classes.list}>
                                <li>
                                    <Link to="/">Для дома</Link>
                                </li>
                                <li>
                                    <Link to="/">Для фитнес клубов</Link>
                                </li>
                                <li>
                                    <Link to="/">Акции</Link>
                                </li>
                                <li>
                                    <Link to="/">Новинки</Link>
                                </li>
                                <li>
                                    <Link to="/">Идеи и подборки </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={classes.footerItem}>
                            <div>
                                <h3>Поддержка</h3>
                            </div>
                            <ul className={classes.list}>
                                <li>
                                    <Link to="/">Доставка и оплата</Link>
                                </li>
                                <li>
                                    <Link to="/">Условия возврата</Link>
                                </li>
                                <li>
                                    <Link to="/">Сервисная заявка</Link>
                                </li>
                                <li>
                                    <Link to="/">Инструкции</Link>
                                </li>
                                <li>
                                    <Link to="/">Гарантия</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={classes.footerItem}>
                            <div>
                                <h3>Услуги</h3>
                            </div>
                            <ul className={classes.list}>
                                <li>
                                    <Link to="/">3D проект</Link>
                                </li>
                                <li>
                                    <Link to="/">Консалтинг</Link>
                                </li>
                                <li>
                                    <Link to="/">Бизнес планирование </Link>
                                </li>
                                <li>
                                    <Link to="/">Лизинг</Link>
                                </li>
                                <li>
                                    <Link to="/">Trade-IN</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={classes.footerItem}>
                            <div>
                                <h3>О компании</h3>
                            </div>
                            <ul className={classes.list}>
                                <li>
                                    <Link to="/">О нас</Link>
                                </li>
                                <li>
                                    <Link to="/">Контакты</Link>
                                </li>
                                <li>
                                    <Link to="/">Где купить</Link>
                                </li>
                                <li>
                                    <Link to="/">Наши проекты</Link>
                                </li>
                                <li>
                                    <Link to="/">Блог</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.feedback}>
                        <form className={classes.form} action="">
                            <input placeholder="Подписаться на рассылку" type="text" />
                            <button className={classes.formBtn}>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_4244:13984)">
                                        <path d="M8.1875 14.6768V18.5417C8.1875 18.8117 8.36151 19.0509 8.61919 19.1359C8.68361 19.1567 8.7497 19.1667 8.81496 19.1667C9.01072 19.1667 9.1998 19.0751 9.32027 18.9117L11.59 15.8351L8.1875 14.6768Z" fill="white" />
                                        <path d="M20.6824 0.115907C20.49 -0.0199262 20.2373 -0.0382595 20.0282 0.0709072L1.20438 9.86257C0.981841 9.97841 0.850492 10.2151 0.868898 10.4642C0.88814 10.7142 1.05463 10.9276 1.29139 11.0084L6.52441 12.7901L17.6689 3.29841L9.04513 13.6476L17.8153 16.6334C17.8806 16.6551 17.9492 16.6667 18.0178 16.6667C18.1316 16.6667 18.2445 16.6359 18.3441 16.5759C18.503 16.4792 18.611 16.3167 18.6386 16.1342L20.9393 0.717574C20.9736 0.484241 20.8748 0.252574 20.6824 0.115907Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4244:13984">
                                            <rect width="20.0787" height="20" fill="white" transform="translate(0.867188)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </form>
                        <div className={classes.numbers}>
                            <Link to="/">+38 (067) 2222 22 22</Link>
                            <Link to="/">+38 (067) 5555 55 55</Link>
                            <div className={classes.callback}>
                                <Link to="/">Заказать звонок</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.bot}>
                    <img className={classes.logo} src={logo} alt="" />
                    <div className={classes.partner}>
                        <div className={classes.partnerBtns}>
                            <Button
                                classNames={['grey']}
                                style={{ marginRight: '30px' }}
                            >Become a Partner</Button>
                            <Button
                                classNames={['white']}
                            >Для дилеров</Button>
                        </div>

                        <div className={classes.partnerLinks}>
                            <Link to="/">Become a Partner</Link>
                            <Link to="/">Для дилеров</Link>
                        </div>
                    </div>
                    <div className={classes.social}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9972 8.4597C9.97738 8.4597 8.32902 10.1081 8.32902 12.1279C8.32902 14.1478 9.97738 15.7962 11.9972 15.7962C14.0171 15.7962 15.6655 14.1478 15.6655 12.1279C15.6655 10.1081 14.0171 8.4597 11.9972 8.4597ZM22.9992 12.1279C22.9992 10.6089 23.0129 9.10364 22.9276 7.58736C22.8423 5.82617 22.4406 4.26312 21.1527 2.97525C19.8621 1.68462 18.3018 1.2856 16.5406 1.2003C15.0215 1.11499 13.5163 1.12875 12 1.12875C10.481 1.12875 8.97571 1.11499 7.45943 1.2003C5.69824 1.2856 4.13519 1.68738 2.84732 2.97525C1.55669 4.26587 1.15767 5.82617 1.07237 7.58736C0.987059 9.10639 1.00082 10.6117 1.00082 12.1279C1.00082 13.6442 0.987059 15.1522 1.07237 16.6685C1.15767 18.4297 1.55945 19.9927 2.84732 21.2806C4.13794 22.5712 5.69824 22.9703 7.45943 23.0556C8.97846 23.1409 10.4837 23.1271 12 23.1271C13.519 23.1271 15.0243 23.1409 16.5406 23.0556C18.3018 22.9703 19.8648 22.5685 21.1527 21.2806C22.4433 19.99 22.8423 18.4297 22.9276 16.6685C23.0157 15.1522 22.9992 13.647 22.9992 12.1279ZM11.9972 17.772C8.87389 17.772 6.35318 15.2513 6.35318 12.1279C6.35318 9.00457 8.87389 6.48387 11.9972 6.48387C15.1206 6.48387 17.6413 9.00457 17.6413 12.1279C17.6413 15.2513 15.1206 17.772 11.9972 17.772ZM17.8725 7.57085C17.1432 7.57085 16.5543 6.98195 16.5543 6.25271C16.5543 5.52347 17.1432 4.93457 17.8725 4.93457C18.6017 4.93457 19.1906 5.52347 19.1906 6.25271C19.1908 6.42587 19.1569 6.59738 19.0907 6.7574C19.0245 6.91742 18.9275 7.06282 18.805 7.18526C18.6826 7.3077 18.5372 7.40479 18.3772 7.47096C18.2171 7.53712 18.0456 7.57107 17.8725 7.57085Z" fill="#909CB5" />
                        </svg>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1093:24818)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 12.1949C0 18.1609 4.333 23.1219 10 24.1279V15.4609H7V12.1279H10V9.46093C10 6.46093 11.933 4.79493 14.667 4.79493C15.533 4.79493 16.467 4.92793 17.333 5.06093V8.12793H15.8C14.333 8.12793 14 8.86093 14 9.79493V12.1279H17.2L16.667 15.4609H14V24.1279C19.667 23.1219 24 18.1619 24 12.1949C24 5.55793 18.6 0.12793 12 0.12793C5.4 0.12793 0 5.55793 0 12.1949Z" fill="#909CB5" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1093:24818">
                                    <rect width="24" height="24" fill="white" transform="translate(0 0.12793)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1093:24819)">
                                <path d="M14.0037 11.9192L11.1963 10.6092C10.9513 10.4954 10.75 10.6229 10.75 10.8942V13.3617C10.75 13.6329 10.9513 13.7604 11.1963 13.6467L14.0025 12.3367C14.2488 12.2217 14.2487 12.0342 14.0037 11.9192ZM12 0.12793C5.3725 0.12793 0 5.50043 0 12.1279C0 18.7554 5.3725 24.1279 12 24.1279C18.6275 24.1279 24 18.7554 24 12.1279C24 5.50043 18.6275 0.12793 12 0.12793ZM12 17.0029C5.8575 17.0029 5.75 16.4492 5.75 12.1279C5.75 7.80668 5.8575 7.25293 12 7.25293C18.1425 7.25293 18.25 7.80668 18.25 12.1279C18.25 16.4492 18.1425 17.0029 12 17.0029Z" fill="#909CB5" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1093:24819">
                                    <rect width="24" height="24" fill="white" transform="translate(0 0.12793)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;