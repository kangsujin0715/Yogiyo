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
		{ pName: '최대10자의이름이죠', pNum: '010-9999-9999', pId: 'call09', pFor: 'call09' },
		{ pName: '미래의짝꿍', pNum: '010-9999-9999', pId: 'call10', pFor: 'call10' },
		{ pName: '짱구', pNum: '010-1234-1234', pId: 'call11', pFor: 'call11' },
		{ pName: '맹구', pNum: '010-1234-1234', pId: 'call12', pFor: 'call12' },
		{ pName: '철수', pNum: '010-1234-1234', pId: 'call13', pFor: 'call13' },
		{ pName: '유리', pNum: '010-1234-1234', pId: 'call14', pFor: 'call14' },
		{ pName: '훈이', pNum: '010-1234-1234', pId: 'call15', pFor: 'call15' },
		{ pName: '최대10자의이름이죠', pNum: '010-9999-9999', pId: 'call16', pFor: 'call16' },
		{ pName: '미래의짝꿍', pNum: '010-9999-9999', pId: 'call17', pFor: 'call17' },
		{ pName: '짱구', pNum: '010-1234-1234', pId: 'call18', pFor: 'call18' },
		{ pName: '맹구', pNum: '010-1234-1234', pId: 'call19', pFor: 'call19' },
		{ pName: '철수', pNum: '010-1234-1234', pId: 'call20', pFor: 'call20' },
		{ pName: '유리', pNum: '010-1234-1234', pId: 'call21', pFor: 'call21' },
		{ pName: '훈이', pNum: '010-1234-1234', pId: 'call22', pFor: 'call22' },
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
