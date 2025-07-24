
import users_icon from "../assets/middle__footer/users_icon.png"
import check_icon from "../assets/middle__footer/check.png"
import search_icon from "../assets/middle__footer/searching.png"
import goUp_icon from "../assets/middle__footer/go_upicon.png"
import listIcon from "../assets/middle__footer/list_icon.png"




function MiddleFooter(){

     const footerFirst = ' Oson Apteka '

    return(
        <footer className="middle_foter">
            <div className="middle_footer-title">
                <h1 className="main_middleFooter-text">
                    Поисковый сервис — уникальный. Его преимущества
                     одинаково хороши как для владельцев аптек, так
                      и для покупателей:
                </h1>
            </div>
            <div className="footer_info">
                <div className="middle_footer-img">
                    <img src={users_icon} alt="" className="middle_icon" />                   
                </div>
                <div className="middle_footer-text">
                    <h1 className="middle_footer-about">Удобный и понятный интерфейс.
                         В отличие от многих современных приложений, аптечным поиском 
                         могут пользоваться все возрастные группы. Даже старшее поколение
                          разберется с простой навигацией на странице и принципом 
                          работы справочника лекарств.</h1>
                </div>
            </div>
            <div className="footer_info">
                <div className="middle_footer-img">
                    <img src={check_icon} alt="" className="middle_icon" />                   
                </div>
                <div className="middle_footer-text">
                    <h1 className="middle_footer-about">
                        Актуальная и проверенная информация. Приложение и сайт 
                        <span className="footer_first">{footerFirst}</span>
                        обслуживает команда профессионалов. Специалисты 
                        систематически обновляют данные, проводят аналитическую 
                        работу, отслеживают запросы потребителей. Отчеты о работе
                         ежедневно и еженедельно рассылаются партнерам.
                    </h1>
                </div>
            </div>
             <div className="footer_info">
                <div className="middle_footer-img">
                    <img src={search_icon} alt="" className="middle_icon" />                   
                </div>
                <div className="middle_footer-text">
                    <h1 className="middle_footer-about">
                        Приложение для поиска легко и без проблем интегрируется
                         со многими широко распространенными программными обеспечениями
                          аптек, которые автоматизируют процессы в аптеке 
                          (FOM, ABU, 1C и т.д.). Для подключения нет необходимости
                           в сложной настройке оборудования торговой точки.
                    </h1>
                </div>
            </div>
            <div className="footer_info">
                <div className="middle_footer-img">
                    <img src={goUp_icon} alt="" className="middle_icon" />                   
                </div>
                <div className="middle_footer-text">
                    <h1 className="middle_footer-about">
                        Помогает бизнесу выходить на новый уровень и соответствовать 
                        современным IT-технологиям. Тщательно проработанная концепция 
                        поисковика в несколько раз увеличивает прибыль предприятия.
                    </h1>
                </div>
            </div>
            <div className="footer_info">
                <div className="middle_footer-img">
                    <img src={listIcon} alt="" className="middle_icon" />                   
                </div>
                <div className="middle_footer-text">
                    <h1 className="middle_footer-about">
                        Воспользоваться<span className="footer_first">{footerFirst}</span>
                        можно на смартфоне, скачав приложение. Приложение поддерживает 
                        современные операционные системы. Кроме этого, сервис доступен со 
                        стационарного ПК. Установленный поисковик не занимает много места в
                         памяти телефона.
                    </h1>
                </div>
            </div>
        </footer>
    );

};

export default MiddleFooter;