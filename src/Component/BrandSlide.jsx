import React from 'react'
import MoreTitle from './MoreTitle'
import BrandLogo from './BrandLogo'
import BtnAllView from './BtnAllView'

import '../css/brandSlide.css'


function BrandSlide() {
  return (
    <div className='brand-slide'>
        <MoreTitle btnMore='btn-on'/>
        <div className='slide-area horizontal-scroll'>
            <ul>
                <li>
                    <BrandLogo linkUrl='#1' logoUrl='/images/brand/brand-01.png' brandName='네네치킨' />
                </li>
                <li>
                    <BrandLogo linkUrl='#1' logoUrl='/images/brand/brand-02.png' brandName='네네치킨'/>
                </li>
                <li>
                    <BrandLogo linkUrl='#1' logoUrl='/images/brand/brand-03.png' brandName='네네치킨'/>
                </li>
                <li>
                    <BrandLogo linkUrl='#1' logoUrl='/images/brand/brand-04.png' brandName='네네치킨'/>
                </li>
                <li>
                    <BrandLogo linkUrl='#1' logoUrl='/images/brand/brand-05.png' brandName='네네치킨'/>
                </li>
                <li>
                    <BrandLogo linkUrl='#1' logoUrl='/images/brand/brand-01.png' brandName='네네치킨' />
                </li>
                <li>
                    <BrandLogo linkUrl='#1' logoUrl='/images/brand/brand-02.png' brandName='네네치킨'/>
                </li>
                <li>
                    <BrandLogo linkUrl='#1' logoUrl='/images/brand/brand-03.png' brandName='네네치킨'/>
                </li>
                <li>
                    <BrandLogo linkUrl='#1' logoUrl='/images/brand/brand-04.png' brandName='네네치킨'/>
                </li>
                <li>
                    <BrandLogo linkUrl='#1' logoUrl='/images/brand/brand-05.png' brandName='네네치킨'/>
                </li>
                <li>
                    <BrandLogo linkUrl='#1' logoUrl='/images/brand/brand-01.png' brandName='네네치킨' />
                </li>
                <li>
                    <BrandLogo linkUrl='#1' logoUrl='/images/brand/brand-02.png' brandName='네네치킨'/>
                </li>
                <li>
                    <BtnAllView listUrl='#'/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default BrandSlide