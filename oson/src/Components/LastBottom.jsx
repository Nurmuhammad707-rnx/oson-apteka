import list_icon from "../assets/last_footer/list_icon.png"
import scanner from "../assets/last_footer/scanner_icon.png"
function LastBottom(){
    const osonText = ' Oson Apteka '
    const lastOson = ' Oson Apteka '
    return(
        <footer>
                <h1 className="LastBottom_title">Справочник 
                <span className="big_blue">{osonText}</span>
                имеет дополнительные функции
                </h1>
                <div className="FooterLast">
                     <div className="lastBottom_lists">
                    <div className="list_about">
                        <img src={scanner} alt="" className="list_about-icon" />
                        <h4 className="list_about-text">Поиск по штрих-коду. Больше
                             не надо вбивать длинные названия лекарств для поиска. 
                             Достаточно отсканировать смартфоном штрих-код и система
                              автоматически выдаст нужную информацию.</h4>
                    </div>
                </div>
                <div className="lastBottom_lists">
                    <div className="list_about">
                        <img src={list_icon} alt="" className="list_about-icon" />
                        <h4 className="list_about-text">Одновременный поиск нескольких 
                            позиций. Если в назначении указано два и более препарата, 
                            их можно находить одновременно.</h4>
                    </div>
                </div>
                <div className="lastBottom_lists">
                    <div className="list_about">
                        <img src={list_icon} alt="" className="list_about-icon" />
                        <h4 className="list_about-text">Поиск препаратов по действующему
                             веществу. Часто врачи выписывают лекарство, которых может не 
                             оказаться в свободной продаже или их стоимость сильно высокая.
                              В справочнике можно искать аналоги с одинаковым составом.</h4>
                    </div>
                </div>

                </div>
               <h4 className="last_word">
                Справочник лекарств полностью бесплатный для пользователей. Для бизнеса мы
                 предлагаем выгодные условия сотрудничества. Первый месяц пользования 
                 <span className="lastBlue_word">{lastOson}</span>— абсолютно бесплатно.
               </h4>
        </footer>
    );
}

export default LastBottom;