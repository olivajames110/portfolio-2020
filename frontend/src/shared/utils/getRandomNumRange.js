export let getRandomNumRange = (min, max) => {
	return Math.floor(Math.random() * max) + 1;
};

export default { getRandomNumRange };
