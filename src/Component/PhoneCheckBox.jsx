import React from 'react';

import '../css/phone.css';

function PhoneCheckBox() {
	const callList = [
		{ pName: '김민지', pNum: '010-9999-9999', pId: 'call01', pFor: 'call01' },
		{ pName: '최대10자의이름이죠', pNum: '010-9999-9999', pId: 'call02', pFor: 'call02' },
		{ pName: '미래의짝꿍', pNum: '010-9999-9999', pId: 'call03', pFor: 'call03' },
		{ pName: '짱구', pNum: '010-1234-1234', pId: 'call04', pFor: 'call04' },
		{ pName: '맹구', pNum: '010-1234-1234', pId: 'call05', pFor: 'call05' },
		{ pName: '철수', pNum: '010-1234-1234', pId: 'call06', pFor: 'call06' },
		{ pName: '유리', pNum: '010-1234-1234', pId: 'call07', pFor: 'call07' },
		{ pName: '훈이', pNum: '010-1234-1234', pId: 'call08', pFor: 'call08' },
		{ pName: '최대10자의이름이죠', pNum: '010-9999-9999', pId: 'call02', pFor: 'call02' },
		{ pName: '미래의짝꿍', pNum: '010-9999-9999', pId: 'call03', pFor: 'call03' },
		{ pName: '짱구', pNum: '010-1234-1234', pId: 'call04', pFor: 'call04' },
		{ pName: '맹구', pNum: '010-1234-1234', pId: 'call05', pFor: 'call05' },
		{ pName: '철수', pNum: '010-1234-1234', pId: 'call06', pFor: 'call06' },
		{ pName: '유리', pNum: '010-1234-1234', pId: 'call07', pFor: 'call07' },
		{ pName: '훈이', pNum: '010-1234-1234', pId: 'call08', pFor: 'call08' },
		{ pName: '최대10자의이름이죠', pNum: '010-9999-9999', pId: 'call02', pFor: 'call02' },
		{ pName: '미래의짝꿍', pNum: '010-9999-9999', pId: 'call03', pFor: 'call03' },
		{ pName: '짱구', pNum: '010-1234-1234', pId: 'call04', pFor: 'call04' },
		{ pName: '맹구', pNum: '010-1234-1234', pId: 'call05', pFor: 'call05' },
		{ pName: '철수', pNum: '010-1234-1234', pId: 'call06', pFor: 'call06' },
		{ pName: '유리', pNum: '010-1234-1234', pId: 'call07', pFor: 'call07' },
		{ pName: '훈이', pNum: '010-1234-1234', pId: 'call08', pFor: 'call08' },
	]
  return (
    <ul className="phone-check-box">
		{callList.map((list, i) => {
			return (
				<li key={i} className="phone-item">
					<input type="checkbox" id={list.pId} />
					<label htmlFor={list.pFor}>
						{list.pName}
					<span className='phone'>{list.pNum}</span>
					</label>
				</li>
			);
		})}
    </ul>
  );
}

export default PhoneCheckBox;
