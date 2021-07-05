import { Button } from 'antd';
import React from 'react';
import "../../css/modal.css";

export default function ModModal( props ) {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { modOpen, modClose, header } = props;
    
    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ modOpen ? 'openModal modal' : 'modal' }>
            { modOpen ? (  
                <section>
                    <header>
                        {header}
                        <Button className="close" onClick={modClose}> &times; </Button>
                    </header>
                    <main>
                        {props.children}
                    </main>
                </section>
            ) : null }
        </div>
    )
}