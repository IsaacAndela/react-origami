const getStageClassName = (base, stage) => (
	`${base}--${stage}`
);
export const getStageClassNames = (base, stage = 0) => (
	stage > 0 ?
		`${getStageClassNames(base, stage - 1)} ${getStageClassName(base, stage)}` :
		getStageClassName(base, stage)
);
