import React from 'react';

const pswpElement = 
    <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="pswp__bg"></div>
        <div className="pswp__scroll-wrap">
            <div className="pswp__container">
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
            </div>
            <div className="pswp__ui pswp__ui--hidden">

                <div className="pswp__top-bar">
                    <div className="pswp__counter"></div>

                    <button className="pswp__button pswp__button--fs" title="Toggle fullscreen">
                        <i className="fas fa-expand"></i>
                        <i className="fas fa-compress"></i>
                    </button>

                    <button className="pswp__button pswp__button--zoom" title="Zoom in/out">
                        <i className="fas fa-search-plus"></i>
                        <i className="fas fa-search-minus"></i>
                    </button>

                    <div className="pswp__preloader">
                        <div className="pswp__preloader__icn">
                          <div className="pswp__preloader__cut">
                            <div className="pswp__preloader__donut"></div>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div className="pswp__share-tooltip"></div> 
                </div>

                <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                    <i className="fas fa-arrow-left"></i>
                </button>

                <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                    <i className="fas fa-arrow-right"></i>
                </button>

                <div className="pswp__caption">
                    <div className="pswp__caption__center"></div>
                </div>
            </div>
        </div>
    </div>

export default pswpElement