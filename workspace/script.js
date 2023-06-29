$(document).ready(function() {
    // Define the category tree
    var tree = [
        {
            name: 'Category 1',
            subcategories: [
                {
                    name: 'Subcategory 1.1',
                    subcategories: [
                        { name: 'Sub 1.1.1', subcategories: [] },
                        { name: 'Sub 1.1.2', subcategories: [] },
                        { name: 'Sub 1.1.3', subcategories: [] }
                    ]
                },
                {
                    name: 'Subcategory 1.2',
                    subcategories: [
                        { name: 'Sub 1.2.1', subcategories: [] },
                        { name: 'Sub 1.2.2', subcategories: [] },
                        { name: 'Sub 1.2.3', subcategories: [] }
                    ]
                }
            ]
        },
        {
            name: 'Category 2',
            subcategories: [
                {
                    name: 'Subcategory 2.1',
                    subcategories: [
                        { name: 'Sub 2.1.1', subcategories: [] },
                        { name: 'Sub 2.1.2', subcategories: [] },
                        { name: 'Sub 2.1.3', subcategories: [] }
                    ]
                },
                {
                    name: 'Subcategory 2.2',
                    subcategories: [
                        { name: 'Sub 2.2.1', subcategories: [] },
                        { name: 'Sub 2.2.2', subcategories: [] },
                        { name: 'Sub 2.2.3', subcategories: [] }
                    ]
                }
            ]
        },
        {
            name: 'Category 3',
            subcategories: [
                {
                    name: 'Subcategory 3.1',
                    subcategories: [
                        { name: 'Sub 3.1.1', subcategories: [] },
                        { name: 'Sub 3.1.2', subcategories: [] },
                        { name: 'Sub 3.1.3', subcategories: [] }
                    ]
                },
                {
                    name: 'Subcategory 3.2',
                    subcategories: [
                        { name: 'Sub 3.2.1', subcategories: [] },
                        { name: 'Sub 3.2.2', subcategories: [] },
                        { name: 'Sub 3.2.3', subcategories: [] }
                    ]
                }
            ]
        },
        {
            name: 'Category 4',
            subcategories: [
                {
                    name: 'Subcategory 4.1',
                    subcategories: [
                        { name: 'Sub 4.1.1', subcategories: [] },
                        { name: 'Sub 4.1.2', subcategories: [] },
                        { name: 'Sub 4.1.3', subcategories: [] }
                    ]
                },
                {
                    name: 'Subcategory 4.2',
                    subcategories: [
                        { name: 'Sub 4.2.1', subcategories: [] },
                        { name: 'Sub 4.2.2', subcategories: [] },
                        { name: 'Sub 4.2.3', subcategories: [] }
                    ]
                }
            ]
        },
        {
            name: 'Category 5',
            subcategories: [
                {
                    name: 'Subcategory 5.1',
                    subcategories: [
                        {
                            name: 'Sub 5.1.1',
                            subcategories: [
                                { name: 'Sub-sub 5.1.1.1', subcategories: [] },
                                { name: 'Sub-sub 5.1.1.2', subcategories: [] },
                                { name: 'Sub-sub 5.1.1.3', subcategories: [] },
                            ]
                        },
                        { name: 'Sub 5.1.2', subcategories: [] },
                        { name: 'Sub 5.1.3', subcategories: [] }
                    ]
                },
                {
                    name: 'Subcategory 5.2',
                    subcategories: [
                        { name: 'Sub 5.2.1', subcategories: [] },
                        { name: 'Sub 5.2.2', subcategories: [] },
                        {
                            name: 'Sub 5.2.3',
                            subcategories: [
                                { name: 'Sub-sub 5.2.3.1', subcategories: [] },
                                { name: 'Sub-sub 5.2.3.2', subcategories: [] },
                                { name: 'Sub-sub 5.2.3.3', subcategories: [] },
                            ]
                        }
                    ]
                }
            ]
        }

    ];


    function createCategory(category) {
        var $category = $('<div class="category"></div>');
        var $checkbox = $('<input type="checkbox" class="checkbox">');
        var $name = $('<span></span>').text(category.name);

        var $button = $('<button class="toggle">+</a>');
        $category.append($checkbox, $name);
        if (category.subcategories.length > 0) {
            $category.prepend($button);
        } else {
            $category.prepend('<button class="toggle">*</button>');
        }

        var $subcategories = $('<div class="subcategories"></div>').hide();
        category.subcategories.forEach(function(subcategory) {
            $subcategories.append(createCategory(subcategory));
        });
        var $selectAllDiv =  $('<div class="category"></div>');
        var $selectAllCheckbox = $('<input type="checkbox" class="checkbox select-all">');
        var $selectAllLabel = $('<span>select / deselect all</span>');
        $selectAllDiv.append($selectAllCheckbox, $selectAllLabel)
        $subcategories.prepend($selectAllDiv);
        $category.append($subcategories);

        // Dodajemy checkbox "zaznacz/odznacz wszystko"


        $button.click(function() {
            $subcategories.toggle();
            $button.text($subcategories.is(':visible') ? '-' : '+');
        });

        // Select/deselect all subcategories
        $selectAllCheckbox.change(function() {
            $subcategories.find('.checkbox').prop('checked', $selectAllCheckbox.is(':checked'));
        });

        return $category;
    }

    tree.forEach(function(category) {
        $('#tree').append(createCategory(category));
    });
});
