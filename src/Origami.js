import React from 'react';
import {Shapes} from './Shapes';
import './Origami.css';
import {Fold} from './Fold';
import {getStageClassNames} from './helpers';

export const Origami = ({stage}) => (
	<div className={`origami ${getStageClassNames('origami', stage)}`}>
		{Shapes.map(({name, Shape}) => (
			<Fold shape={name} stage={stage}>
				{({side}) => <Shape side={side}/>}
			</Fold>
		))}
	</div>
);
