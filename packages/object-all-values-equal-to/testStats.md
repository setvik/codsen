TAP version 13
ok 1 - test/test.js # time=65.206ms {
    # Subtest: 01.01 - nested objects
        ok 1 - 01.01.01
        ok 2 - 01.01.02
        1..2
    ok 1 - 01.01 - nested objects # time=9.834ms
    
    # Subtest: 01.02 - nested array
        ok 1 - 01.02.01
        ok 2 - 01.02.02
        ok 3 - 01.02.03
        ok 4 - 01.02.04
        1..4
    ok 2 - 01.02 - nested array # time=3.38ms
    
    # Subtest: 01.03 - nulls
        ok 1 - 01.03.01
        ok 2 - 01.03.02
        1..2
    ok 3 - 01.03 - nulls # time=1.51ms
    
    # Subtest: 01.04 - empty obj/arr
        ok 1 - 01.04.01
        ok 2 - 01.04.02
        ok 3 - 01.04.03 - only valid for empty container-like types, array and plain object
        1..3
    ok 4 - 01.04 - empty obj/arr # time=1.829ms
    
    # Subtest: 02.01 - various throws
        ok 1 - expected to throw
        ok 2 - expected to throw
        ok 3 - expected to throw
        1..3
    ok 5 - 02.01 - various throws # time=2.939ms
    
    1..5
    # time=65.206ms
}

1..1
# time=2531.114ms