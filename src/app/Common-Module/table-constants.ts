export class TableConstants {
    public static readonly CircularColumns = [
        { field: 'letterNo', header: 'G.O/Letter No', align: 'left !important'},
        { field: 'letterDate', header: 'G.O/Letter Date', align: 'left !important'},
        { field: 'title', header: 'Title', align: 'left !important'},
    ];

    public static readonly UserManualColumns = [
        { field: 'sno', header: 'S.No', align: 'left !important'},
        { field: 'title', header: 'Title', align: 'left !important'},
        { field: 'documentype', header: 'Document Type', align: 'left !important'},
        { field: 'download', header: 'Download', align: 'left !important'},
    ];

    public static readonly tellmehowColumns = [
        { field: 'sno', header: 'S.No', align: 'left !important'},
        { field: 'detail', header: 'Detail', align: 'left !important'},
        { field: 'fee', header: 'Fee', align: 'left !important'},
    ]

    public static readonly DutyAndFeesColumns = [
        { field: 'Categories of Document', header: 'Categories of Document', align: 'left !important'},
        { field: 'Stamp Duty', header: 'Stamp Duty', align: 'left !important'},
        { field: 'Registration Fee', header: 'Registration Fee', align: 'left !important'},
    ];

    public static readonly PWDColums = [
        { field: 'floorNo', header: 'Floor No.', align: 'left !important'},
        { field: 'areaSqFt', header: 'Area Sq.Ft', align: 'right !important'},
        { field: 'material', header: 'Material Type', align: 'left !important'},
        { field: 'wood', header: 'Wood Type', align: 'left !important'},
        { field: 'roof', header: 'Roof Type', align: 'left !important'},
    ];
}