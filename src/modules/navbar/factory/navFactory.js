/**
 * Created by semianchuk on 17.10.16.
 */
angular.module('navbar')
    .factory('navFactory', [ function () {

        var nav = [
            {
                name: 'files',
                link: '/',
                icon: 'fa-file'
            },
            {
                name: 'photos',
                link: '/photos',
                icon: 'fa-file-image-o'
            },
            {
                name: 'sharing',
                link: '/sharing',
                icon: 'fa-share-alt'
            },
            {
                name: 'link',
                link: '/link',
                icon: 'fa-link'
            },
            {
                name: 'events',
                link: '/events',
                icon: 'fa-clock-o'
            },
            {
                name: 'get started',
                link: '/getstarted',
                icon: 'fa-share-square'
            }

        ];

        function getNav() {
            return nav;
        }

        return {
            getNav: getNav
        };
    }]);