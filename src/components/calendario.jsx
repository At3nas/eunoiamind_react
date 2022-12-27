import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/sass/styles.scss';

const Calendario = () => {
    return (
        <div className="container-fluid">
            <Sidebar />
            <div class="div__calendar">
                <br />
                <h1 class="page__title center-element">Calendario</h1>

                <div class="div__calendar__container">
                    <div class="div__calendar__container__year">
                        <h2 class="year__title" id="year"></h2>
                    </div>

                    <div class="div__calendar__container__month">
                        <img src="/src/assets/arrow-left.png" class="calendar__arrow" id="calendar-prev" />
                        <h3 class="month__title" id="month"></h3>
                        <img src="/src/assets/arrow-right.png" class="calendar__arrow" id="calendar-next" />
                    </div>

                    <div class="div__calendar__container__weeks">
                        <div class="calendar__week center-element">
                            <p class="week-day">Lun</p>
                            <p class="week-day">Mar</p>
                            <p class="week-day">Mié</p>
                            <p class="week-day">Jue</p>
                            <p class="week-day">Vie</p>
                            <p class="week-day">Sáb</p>
                            <p class="week-day">Dom</p>
                        </div>
                        <div class="calendar__dates center-element" id="dates">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendario;