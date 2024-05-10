import {ReactElement, useEffect, useRef, useState} from "react";


const Accordion = ({AccordionHeader,children,defaultOpen,isOpenStatus,canClose=true})=>{

    const headerWrapperRef = useRef(null)
    const bodyWrapperRef = useRef(null)

    const [isOpen , setIsOpen] = useState(defaultOpen ?? false)

    const [headerHeight , setHeaderHeight] = useState(0)
    const [bodyHeight , setBodyHeight] = useState(0)

    useEffect(()=>{

        setHeaderHeight(headerWrapperRef?.current?.offsetHeight)
        setBodyHeight(bodyWrapperRef?.current?.offsetHeight)

    },[
        headerWrapperRef?.current?.offsetHeight,
        bodyWrapperRef?.current?.offsetHeight
    ])

    useEffect(()=>{
        if(isOpenStatus){
            isOpenStatus(isOpen)
        }
    },[isOpen])

    return(
        <div
            onClick={()=> setIsOpen(canClose ? !isOpen : true)}
            className={'w-full relative'}
        >
            <div ref={headerWrapperRef} className={'w-full'}>
                {AccordionHeader}
            </div>
            <div
                 className={'w-full left-0 transition-all overflow-hidden'}
                 style={{
                     top : headerHeight ?? 0,
                     height : isOpen ? bodyHeight : 0
                }}
            >
                <div ref={bodyWrapperRef} className={'w-full'}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Accordion


















