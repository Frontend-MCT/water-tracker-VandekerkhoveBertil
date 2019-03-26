(function () {
	console.log('💧', 'https://www.youtube.com/watch?v=ARC1w1WWxGY');

	const options = {
		units: 'ml',
		dailyGoal: 2000,
		mode: 'local',
		domRefs: {
			percentage: 'js-amount',
			timeStampHolder: 'js-time-stamps',
			addButton: 'js-log',
			currentGoal: 'js-goal',
			currentUnits: 'js-units'
		},
		afterUpdate: function (newPercentage) {
			console.log('It has been updated!');
		}
	};
	document.addEventListener('DOMContentLoaded', () => {
		new ProgressTracker(options);
	})
})();
