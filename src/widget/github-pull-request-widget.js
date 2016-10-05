// namespace widget

class GithubPullRequestWidget {
    /**
     * Return the type of the widget
     *
     * @returns {string}
     */
    getType () {
        return 'github-pull-request';
    }

    /**
     * Return the data used to render the widget
     *
     * @returns {Array}
     */
    getData() {
        let pullRequest = [];
        for (let i = 0;i < 10;i++) {
            pullRequest.push({
                'icon': {
                    'icon': 'github',
                    'size': 'large',
                    'color': 'black'
                },
                'title': 'Call to undefined function in ApcCache.php',
                'description': '#4829 opened 5 days ago by mepdr',
                'url': ''
            });
        }

        return pullRequest;
    }
}

module.exports = new GithubPullRequestWidget();
