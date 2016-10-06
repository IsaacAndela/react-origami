import React from 'react';
import './Fold.css';
import {getStageClassNames} from './helpers';

const allFoldNames = [
	'bodyFold',
	'wingFold',
	'noseFold',
];



const getFoldClassNames = ({foldName, shape, stage}) => (
	`fold ${foldName} ${foldName}--${shape} ${getStageClassNames('fold', stage)}`
);

export const Fold = ({
	foldNames: [foldName, ...foldNamesTail] = allFoldNames,
	shape,
	stage,
	children,
}) => (
	foldNamesTail.length > 0 ?
		<span className={getFoldClassNames({foldName, shape, stage})}>
			<Fold foldNames={foldNamesTail} shape={shape} stage={stage}>
				{children}
			</Fold>
		</span> :
		<span className={getFoldClassNames({foldName, shape, stage})}>
			{children({side: 'back'})}
			{children({side: 'front'})}
		</span>
);
