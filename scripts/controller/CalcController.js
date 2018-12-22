class CalcController
    {
        constructor()
        {
            this._locale = 'pt-BR';
            this._displayCalcEl = document.querySelector("#display");
            this._dateEl = document.querySelector("#data");
            this._timeEl = document.querySelector("#hora");
            this._currentDate;
            this.initialize();
            this.initButtonsEvents();
           // this.addEventListenerAll();
        }

        initialize()
            {
                this.setDisplayDataTime();

                setInterval(() =>
                {
                    this.setDisplayDataTime();

                }, 1000);

            }

        addEventListenerAll(element, events, fn)
            {
                events.split(' ').forEach(event =>
                    {
                        element.addEventListener(event, fn, false);
                    });
            }
            
            execBtn(value)
                {
                    switch(value)
                    {

                    }
                }

            initButtonsEvents()
                {
                    let buttons = document.querySelectorAll("#buttons > g, #parts > g")

                    buttons.forEach((btn, index) =>
                        {
                            this.addEventListenerAll(btn, "click drag", e => 
                            {
                                let textBtn = btn.className.baseVal.replace("btn-", "");

                                this.execBtn(textBtn);
                            });

                            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>
                            {
                                btn.style.cursor = "pointer";
                            });
                        }
                )};

        setDisplayDataTime()
            {
                this.displayDate = this.currentDate.toLocaleDateString(this._locale);
                this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

            }

        get displayCalc()
            {
                return this._displayCalcEl.innerHTML;
            }

        get displayTime ()
            {
                return this._timeEl.innerHTML;
            }

        set displayTime(value)
            {
                return this._timeEl.innerHTML = value;
            }    
            
        get displayDate()
            {
                return this._dateEl.innerHTML;
            } 
            
        set displayDate(value)
            {
                return this._dateEl.innerHTML = value;
            }    

        set displayCalc(value)
            {
                this._displayCalcEl.innerHTML = value;
            }

        get currentDate()
            {
                return new Date();
            }

        set currentDate(value)
            {
                this._currentDate = value;
            }    

    }   
