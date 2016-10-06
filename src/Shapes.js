import React from 'react';
import './Shapes.css';

const Svg = ({className, children}) => (
	<svg viewBox="0 0 400 600" className={className}>
		{children}
	</svg>
);

const createShape = ({name, element}) => ({
	name,
	Shape: ({side}) => (
		<Svg className={`shape shape--${name} shape--${side}`}>
			{element}
		</Svg>
	)
})

const shapesConfig = [
	{
		name: 'leftBody',
		element: <g>
			<polygon points="200 600 120 600 120 80 200 0" id="leftBody"/>
			<clipPath id="leftBodyText">
				<use xlinkHref="#leftBody"/>
			</clipPath>
			<text className="shape-text" role="button" tabIndex="0" x="200" y="440" clipPath="url(#leftBodyText)" textAnchor="middle" fontSize="30">
				Click me
			</text>
		</g>
	},
	{
		name: 'leftWing',
		element: <polygon points="120 100 120 600 0 600 0 200 120 80"/>,
	},
	{
		name: 'leftWingNose',
		element: <polygon points="120 80 0 200 0 80 120 80"/>,
	},
	{
		name: 'leftNose',
		element: <polygon points="120 80 200 0 0 0 0 80"/>,
	},
	{
		name: 'rightBody',
		element: <g>
			<polygon points="200 600 280 600 280 80 200 0" id="rightBody"/>
			<clipPath id="rightBodyText">
				<use xlinkHref="#rightBody"/>
			</clipPath>
			<text className="shape-text" x="200" y="440" clipPath="url(#rightBodyText)" textAnchor="middle" fontSize="30">
				Click me
			</text>
		</g>,
	},
	{
		name: 'rightWing',
		element: <polygon points="280 80 280 600 400 600 400 200 280 80"/>,
	},
	{
		name: 'rightWingNose',
		element: <polygon points="280 80 400 200 400 80 300 80"/>,
	},
	{
		name: 'rightNose',
		element: <polygon points="280 80 200 0 400 0 400 80 300 80"/>,
	},
]

export const Shapes = shapesConfig.map(createShape);
