define("ace/snippets/xml_nsoa",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "################\n\
# PULL MAPPING #\n\
################\n\
\n\
snippet pull\n\
    <PULL>\n\
        ${1}\n\
    </PULL>\n\
snippet employee\n\
    <EMPLOYEE_TO_USER>\n\
        ${1}\n\
    </EMPLOYEE_TO_USER>\n\
snippet customer\n\
    <CUSTOMER_TO_CUSTOMER>\n\
        ${1}\n\
    </CUSTOMER_TO_CUSTOMER>\n\
snippet job\n\
    <JOB_TO_PROJECT>\n\
        ${1}\n\
    </JOB_TO_PROJECT>\n\
snippet item\n\
    <ITEM_TO_CATEGORY>\n\
        ${1}\n\
    </ITEM_TO_CATEGORY>\n\
snippet expense_category\n\
    <EXPENSE_CATEGORY_TO_ITEM>\n\
        ${1}\n\
    </EXPENSE_CATEGORY_TO_ITEM>\n\
snippet vendor+\n\
    <VENDOR_TO_USER>\n\
        ${1}\n\
    </VENDOR_TO_USER>\n\
snippet customerpo\n\
    <SO_TO_CUSTOMERPO>\n\
        ${1}\n\
    </SO_TO_CUSTOMERPO>\n\
snippet billing_rule_time\n\
    <PROJECT_BILLING_RULE_TIME>\n\
        ${1}\n\
    </PROJECT_BILLING_RULE_TIME>\n\
snippet billing_rule_fixed\n\
    <PROJECT_BILLING_RULE_FIXED_FEE>\n\
        ${1}\n\
    </PROJECT_BILLING_RULE_FIXED_FEE>\n\
snippet revrev_percent\n\
    <REVREC_RULE_PERCENT_COMPLETE>\n\
        ${1}\n\
    </REVREC_RULE_PERCENT_COMPLETE>\n\
snippet revrec_as_billed\n\
    <REVREC_RULE_AS_BILLED>\n\
        ${1}\n\
    </REVREC_RULE_AS_BILLED>\n\
snippet revrec_ff_percent\n\
    <REVREC_RULE_FF_PERCENT_COMPLETE>\n\
        ${1}\n\
    </REVREC_RULE_FF_PERCENT_COMPLETE>\n\
snippet revrec_date\n\
    <REVREC_RULE_FF_DATE>\n\
        ${1}\n\
    </REVREC_RULE_FF_DATE>\n\
snippet revrec_forecast\n\
    <REVREC_RULE_INC_FORECAST>\n\
        ${1}\n\
    </REVREC_RULE_INC_FORECAST>\n\
snippet revrec_time\n\
    <REVREC_RULE_TIME>\n\
        ${1}\n\
    </REVREC_RULE_TIME>\n\
snippet reimbursement\n\
    <BILLPAYMENT_TO_REIMBURSEMENT>\n\
        ${1}\n\
    </BILLPAYMENT_TO_REIMBURSEMENT>\n\
snippet payment\n\
    <PAYMENT_TO_PAYMENT>\n\
        ${1}\n\
    </PAYMENT_TO_PAYMENT>\n\
snippet deposit\n\
    <DEPOSIT_TO_RETAINER>\n\
        ${1}\n\
    </DEPOSIT_TO_RETAINER>\n\
snippet credit_memo\n\
    <CREDIT_MEMO_TO_CREDIT>\n\
        ${1}\n\
    </CREDIT_MEMO_TO_CREDIT>\n\
snippet invoice+\n\
    <NS_INVOICE_TO_OA_INVOICE>\n\
        ${1}\n\
    </NS_INVOICE_TO_OA_INVOICE>\n\
snippet expense_report+\n\
    <NS_EXPENSE_REP_TO_OA_EXPENSE_REP>\n\
        ${1}\n\
    </NS_EXPENSE_REP_TO_OA_EXPENSE_REP>\n\
snippet journal+\n\
    <JOURNAL_TO_REVENUE>\n\
        ${1}\n\
    </JOURNAL_TO_REVENUE>\n\
snippet contact\n\
    <CONTACT_TO_CONTACT>\n\
        ${1}\n\
    </CONTACT_TO_CONTACT>\n\
snippet vendor\n\
    <VENDOR_TO_VENDOR>\n\
        ${1}\n\
    </VENDOR_TO_VENDOR>\n\
snippet product\n\
    <ITEM_TO_PRODUCT>\n\
        ${1}\n\
    </ITEM_TO_PRODUCT>\n\
snippet purchase_order\n\
    <PURCHASEORDER_TO_PURCHASEORDER>\n\
        ${1}\n\
    </PURCHASEORDER_TO_PURCHASEORDER>\n\
snippet purchase_item\n\
    <PURCHASE_ITEM>\n\
        ${1}\n\
    </PURCHASE_ITEM>\n\
snippet vendorbill\n\
    <VENDORBILL_TO_PURCHASEORDER>\n\
        ${1}\n\
    </VENDORBILL_TO_PURCHASEORDER>\n\
snippet vendorbill+\n\
    <VENDORBILL_TO_PURCHASE_ITEM>\n\
        ${1}\n\
    </VENDORBILL_TO_PURCHASE_ITEM>\n\
snippet cost_center\n\
    <COST_CENTER>\n\
        ${1}\n\
    </COST_CENTER>\n\
snippet category1\n\
    <CATEGORY_1>\n\
        ${1}\n\
    </CATEGORY_1>\n\
snippet category2\n\
    <CATEGORY_2>\n\
        ${1}\n\
    </CATEGORY_2>\n\
snippet category3\n\
    <CATEGORY_3>\n\
        ${1}\n\
    </CATEGORY_3>\n\
snippet category4\n\
    <CATEGORY_4>\n\
        ${1}\n\
    </CATEGORY_4>\n\
snippet category5\n\
    <CATEGORY_5>\n\
        ${1}\n\
    </CATEGORY_5>\n\
snippet payroll_type\n\
    <PAYROLL_TYPE>\n\
        ${1}\n\
    </PAYROLL_TYPE>\n\
snippet timetype\n\
    <TIMETYPE>\n\
        ${1}\n\
    </TIMETYPE>\n\
snippet task+\n\
    <NS_PR_TASK_TO_OA_PR_TASK>\n\
        ${1}\n\
    </NS_PR_TASK_TO_OA_PR_TASK>\n\
\n\
################\n\
# PUSH MAPPING #\n\
################\n\
\n\
snippet push\n\
    <PUSH>\n\
        ${1}\n\
    </PUSH>\n\
snippet invoice\n\
    <INVOICE_TO_INVOICE>\n\
        ${1}\n\
    </INVOICE_TO_INVOICE>\n\
snippet invoice_line\n\
    <INVOICE_LINE>\n\
        ${1}\n\
    </INVOICE_LINE>\n\
snippet invoice_line_time\n\
    <INVOICE_LINE_TIME_GROUP_BY>\n\
        ${1}\n\
    </INVOICE_LINE_TIME_GROUP_BY>\n\
snippet invoice_line_ff\n\
    <INVOICE_LINE_FIXED_FEE_GROUP_BY>\n\
        ${1}\n\
    </INVOICE_LINE_FIXED_FEE_GROUP_BY>\n\
snippet invoice_line_other\n\
    <INVOICE_LINE_OTHER_TIME_GROUP_BY>\n\
        ${1}\n\
    </INVOICE_LINE_OTHER_TIME_GROUP_BY>\n\
snippet invoice_expense\n\
    <INVOICE_EXPENSE_LINE>\n\
        ${1}\n\
    </INVOICE_EXPENSE_LINE>\n\
snippet invoice_purchase\n\
    <INVOICE_PURCHASE_LINE>\n\
        ${1}\n\
    </INVOICE_PURCHASE_LINE>\n\
snippet invoice_purchase+\n\
    <INVOICE_PURCHASE_VB_LINE>\n\
        ${1}\n\
    </INVOICE_PURCHASE_VB_LINE>\n\
snippet invoice_billable\n\
    <INVOICE_BILLABLE_ITEM_LINE>\n\
        ${1}\n\
    </INVOICE_BILLABLE_ITEM_LINE>\n\
snippet invoice_project\n\
    <INVOICE_PROJECT>\n\
        ${1}\n\
    </INVOICE_PROJECT>\n\
snippet expense_report\n\
    <EXPENSE_REP_TO_EXPENSE_REP>\n\
        ${1}\n\
    </EXPENSE_REP_TO_EXPENSE_REP>\n\
snippet expense_line\n\
    <EXPENSE_REP_LINE>\n\
        ${1}\n\
    </EXPENSE_REP_LINE>\n\
snippet expense_tax\n\
    <EXPENSE_REP_LINE_TAX>\n\
        ${1}\n\
    </EXPENSE_REP_LINE_TAX>\n\
snippet journal\n\
    <REVENUE_TO_JOURNAL>\n\
        ${1}\n\
    </REVENUE_TO_JOURNAL>\n\
snippet journal_purchase\n\
    <REVENUE_PURCHASE_TO_JOURNAL>\n\
        ${1}\n\
    </REVENUE_PURCHASE_TO_JOURNAL>\n\
snippet journal_line\n\
    <JOURNAL_LINE>\n\
        ${1}\n\
    </JOURNAL_LINE>\n\
snippet journal_credit\n\
    <JOURNAL_LINE_CREDIT>\n\
        ${1}\n\
    </JOURNAL_LINE_CREDIT>\n\
snippet journal_debit\n\
    <JOURNAL_LINE_DEBIT>\n\
        ${1}\n\
    </JOURNAL_LINE_DEBIT>\n\
snippet journal_credit+\n\
    <JOURNAL_LINE_CREDIT_PURCHASE>\n\
        ${1}\n\
    </JOURNAL_LINE_CREDIT_PURCHASE>\n\
snippet journal_debit+\n\
    <JOURNAL_LINE_DEBIT_PURCHASE>\n\
        ${1}\n\
    </JOURNAL_LINE_DEBIT_PURCHASE>\n\
snippet customer+\n\
    <OA_CUSTOMER_TO_NS_CUSTOMER>\n\
        ${1}\n\
    </OA_CUSTOMER_TO_NS_CUSTOMER>\n\
snippet job+\n\
    <PROJECT_TO_JOB>\n\
        ${1}\n\
    </PROJECT_TO_JOB>\n\
snippet time_entry\n\
    <TIMEENTRY_TO_TIMEBILL>\n\
        ${1}\n\
    </TIMEENTRY_TO_TIMEBILL>\n\
snippet timesheet\n\
    <TIMESHEET>\n\
        ${1}\n\
    </TIMESHEET>\n\
snippet expense_vb\n\
    <EXPENSE_REP_TO_VENDORBILL>\n\
        ${1}\n\
    </EXPENSE_REP_TO_VENDORBILL>\n\
snippet expense_vb_line\n\
    <EXPENSE_REP_LINE_TO_VENDORBILL_LINE>\n\
        ${1}\n\
    </EXPENSE_REP_LINE_TO_VENDORBILL_LINE>\n\
snippet job_code\n\
    <PTA_JOB_CODE_TO_OPP_ITEM>\n\
        ${1}\n\
    </PTA_JOB_CODE_TO_OPP_ITEM>>\n\
snippet task\n\
    <PR_TASK_TO_OPP_ITEM>\n\
        ${1}\n\
    </PR_TASK_TO_OPP_ITEM>\n\
snippet loaded_cost\n\
    <OA_LC_TO_NS_CUSTOM_RECORD>\n\
        ${1}\n\
    </OA_LC_TO_NS_CUSTOM_RECORD>\n\
\n\
#####################\n\
# FIELD DECLARATION #\n\
#####################\n\
\n\
NS_FIELDS\n\
\n\
NS_CUSTOM_FIELDS\n\
\n\
NS_CUSTOM_FIELDS_FROM_SO_INVOICE_LINE_ITEM\n\
\n\
NS_CUSTOM_FIELDS_FROM_SO_INVOICE_HEADER\n\
\n\
OA_FIELDS\n\
\n\
OA_CUSTOM_FIELDS\n\
\n\
OA_FIELDS_INITIAL_ONLY\n\
\n\
OA_CUSTOM_FIELDS_INITIAL_ONLY\n\
\n\
OA_FIELDS_GROUP_BY\n\
\n\
OA_FIELDS_SORT_BY\n\
\n\
#################\n\
# LOOKUP SYNTAX #\n\
#################\n\
\n\
snippet lookup\n\
    lookup=${1}:lookup_table=${2}:lookup_by=${3}:lookup_return=${4}\n\
\n\
##########\n\
# IF/END #\n\
##########\n\
\n\
snippet if_end\n\
    IF <<END\n\
        ${1}\n\
    END\n\
snippet if_then\n\
    IF ${1} THEN ${2} ${3}\n\
snippet if_else\n\
    IF ${1} THEN ${2} ${3} ELSE ${2} ${4}\n\
\n\
##########\n\
# FILTER #\n\
##########\n\
\n\
snippet filter\n\
    FILTER <<END\n\
        ${1}\n\
    END\n\
";
exports.scope = "xml_nsoa";

});
