function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'modueles/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope:{
            member: '='
        }
    };
}