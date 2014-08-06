/**
 * Created with JetBrains WebStorm.
 * User: Charlie
 * Date: 2/5/14
 * Time: 8:56 PM
 * To change this template use File | Settings | File Templates.
 */
charlieSiteApp.controller('CashReceiptJournalController', ['$scope', '$parse', 'JournalLineFactory', function ($scope, $parse, JournalLineFactory) {
    var debitArray = [];
    var creditArray = [];

    $scope.JournalLineNumber = 0;
    $scope.GrandTotalDebit = 0;
    $scope.GrandTotalCredit = 0;

    $scope.ComputeGrandTotalDebit = function (index, debitValue) {
        debitArray[index - 1] = debitValue;
        computeAllDebit();
        showEqualSignIfDebitAndCreditIsEqual();
    };

    $scope.ComputeGrandTotalCredit = function (index, creditValue) {
        creditArray[index - 1] = creditValue;
        computeAllCredit();
        showEqualSignIfDebitAndCreditIsEqual();
    };

    $scope.AddJournalLine = function () {
        $scope.JournalLineNumber++;

        debitArray.push(0);
        creditArray.push(0);

        $scope.NewJournalLine = JournalLineFactory($scope.JournalLineNumber);
    };

    $scope.DeleteJournalLine = function (isDelete, index) {
        var isDeleteString = isDelete;
        var model = $parse(isDeleteString);
        model.assign($scope, true);

        debitArray[index - 1] = 0;
        computeAllDebit();

        creditArray[index - 1] = 0;
        computeAllCredit();

        showEqualSignIfDebitAndCreditIsEqual();
    };

    var computeAllDebit = function () {
        var total = 0;
        $.each(debitArray, function () {
            total += parseInt(this);
        });

        $scope.GrandTotalDebit = parseInt(total);
    };

    var computeAllCredit = function () {
        var total = 0;
        $.each(creditArray, function () {
            total += parseInt(this);
        });

        $scope.GrandTotalCredit = parseInt(total);
    };

    var showEqualSignIfDebitAndCreditIsEqual = function () {
        if ($scope.GrandTotalDebit === 0 && $scope.GrandTotalCredit === 0){
            $scope.isEqual = false;
            $scope.isNotEqual = false;
        }
        else {
            $scope.isEqual = $scope.GrandTotalDebit === $scope.GrandTotalCredit ? true : false;
            $scope.isNotEqual = $scope.GrandTotalDebit !== $scope.GrandTotalCredit ? true : false;
        }

        changeClass();
    };

    var changeClass = function () {
        if ($scope.GrandTotalDebit === 0 && $scope.GrandTotalCredit === 0)
            $scope.myClass = 'row form-group';
        else
            $scope.myClass = $scope.GrandTotalDebit === $scope.GrandTotalCredit ? 'row form-group has-success bg-success' : 'row form-group has-error bg-danger';
    };
}]);