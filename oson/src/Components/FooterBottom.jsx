import wallet_icon from "../assets/bottom_footer/wallet.png"
import location_icon from "../assets/bottom_footer/location_icon.png"
import list_icon from "../assets/bottom_footer/list_icon.png"
import compass_icon from "../assets/bottom_footer/compass_icon.png"




function FooterBottom(){

    return(
        <footer>
            <div className="">
                <h1 className="FooterBottom_title">Особенности работы 
                    справочника лекарств</h1>
                <p className="FooterBottom_text">Справочник лекарств 
                    не просто ищет запрашиваемый препарат по аптекам,
                     но и фильтрует полученную информацию по таким критериям:</p>
            </div>
            <div className="all_cards">
                <div className="bottom_FooterBottom">
                    <div className="list_FooterBottom">
                        <img src={wallet_icon} alt="" className="FooterBottom_icon" />
                        <h4 className="FooterBottom_rext">Ценовая политика: дешевле-дороже;</h4>
                    </div>
                </div>
                <div className="bottom_FooterBottom">
                    <div className="list_FooterBottom">
                        <img src={location_icon} alt="" className="FooterBottom_icon" />
                        <h4 className="FooterBottom_rext">Местоположение торговой точки;</h4>
                    </div>
                </div>
                <div className="bottom_FooterBottom">
                    <div className="list_FooterBottom">
                        <img src={list_icon} alt="" className="FooterBottom_icon" />
                        <h4 className="FooterBottom_rext">Сравнение цен двух аналогичных
                             препаратов у разного продавца;</h4>
                    </div>
                </div>
                <div className="bottom_FooterBottom">
                    <div className="list_FooterBottom">
                        <img src={compass_icon} alt="" className="FooterBottom_icon" />
                        <h4 className="FooterBottom_rext">Выбор самой близкой аптеки по 
                            геолокации пользователя.</h4>
                    </div>
                </div>
            </div>

            <h1 className="FooterBottom_bottom-text">
                Кроме стандартной информации о препарате и цене, в справочнике аптек имеются 
                данные о продавце: юридический и фактический адрес, контактный номер телефона,
                график работы. Можно проложить подробный маршрут до аптечного пункта, чтобы не 
                тратить время на поиски нужной улицы или дома.
            </h1>
        </footer>
    );
}

export default FooterBottom;