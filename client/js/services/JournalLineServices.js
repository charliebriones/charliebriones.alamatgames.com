charlieSiteApp.factory('JournalLineFactory', function () {
    return function (journalLineNumber) {
        return '<tr data-ng-hide="isDelete' + journalLineNumber + '">' +
            '<td style="vertical-align:middle"><a href="#" class="btn btn-default" data-ng-click="DeleteJournalLine(\'isDelete' + journalLineNumber + '\', ' + journalLineNumber + ')">-</a></td>' +
            '<td style="vertical-align:middle">' + journalLineNumber + '</td>' +
            '<td><input type="text" class="form-control" placeholder="Ledger Account"/></td>' +
            '<td><input type="text" class="form-control" placeholder="Subsidiary Account"/></td>' +
            '<td><input type="text" class="form-control" placeholder="Description"/></td>' +
            '<td><input type="text" class="form-control text-right" placeholder="Debit" data-ng-model="Debit' + journalLineNumber + '" data-ng-change="ComputeGrandTotalDebit(' + journalLineNumber + ', Debit' + journalLineNumber + ' )" /></td>' +
            '<td><input type="text" class="form-control text-right" placeholder="Credit" data-ng-model="Credit' + journalLineNumber + '" data-ng-change="ComputeGrandTotalCredit(' + journalLineNumber + ', Credit' + journalLineNumber + ' )" /></td>' +
            '</tr>';
    }
});
