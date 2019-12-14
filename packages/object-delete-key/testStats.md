TAP version 13
ok 1 - test/test.js # time=888.296ms {
    # Subtest: 01.01 - delete a value which is string
        ok 1 - 01.01
        1..1
    ok 1 - 01.01 - delete a value which is string # time=25.488ms
    
    # Subtest: 01.02 - delete a value which is plain object
        ok 1 - 01.02
        1..1
    ok 2 - 01.02 - delete a value which is plain object # time=6.799ms
    
    # Subtest: 01.03 - delete two values, plain objects, cleanup=false
        ok 1 - 01.03
        1..1
    ok 3 - 01.03 - delete two values, plain objects, cleanup=false # time=7.317ms
    
    # Subtest: 01.04 - delete two values, plain objects, cleanup=true
        ok 1 - 01.04
        1..1
    ok 4 - 01.04 - delete two values, plain objects, cleanup=true # time=25.131ms
    
    # Subtest: 01.05 - delete two values which are plain objects (on default)
        ok 1 - 01.05
        1..1
    ok 5 - 01.05 - delete two values which are plain objects (on default) # time=19.521ms
    
    # Subtest: 01.06 - delete a value which is an array
        ok 1 - 01.06
        1..1
    ok 6 - 01.06 - delete a value which is an array # time=3.827ms
    
    # Subtest: 01.07 - delete two values which are arrays, cleanup=false
        ok 1 - 01.07
        1..1
    ok 7 - 01.07 - delete two values which are arrays, cleanup=false # time=4.538ms
    
    # Subtest: 01.08 - delete two values which are arrays, cleanup=default
        ok 1 - 01.08
        1..1
    ok 8 - 01.08 - delete two values which are arrays, cleanup=default # time=11.082ms
    
    # Subtest: 02.01 - simple plain object, couple instances found
        ok 1 - 02.01.01 - no settings
        ok 2 - 02.01.02 - objects only (same outcome as 2.1.1)
        ok 3 - 02.01.03 - arrays only (none found)
        ok 4 - 02.01.04 - only=any
        ok 5 - 02.01.05 - does not touch key within object; cleanup will remove up to and including key "c"
        ok 6 - 02.01.06 - does not touch key within array
        ok 7 - 02.01.06 - does not touch key within array
        ok 8 - 02.01.07 - same as #06 but without cleanup
        1..8
    ok 9 - 02.01 - simple plain object, couple instances found # time=54.171ms
    
    # Subtest: 02.02 - nested array/plain objects, multiple instances found
        ok 1 - 02.02.01, default cleanup
        ok 2 - 02.02.02, only=object (same)
        ok 3 - 02.02.03, only=array (nothing done)
        1..3
    ok 10 - 02.02 - nested array/plain objects, multiple instances found # time=33.433ms
    
    # Subtest: 02.03 - nested array/plain objects, multiple instances found, false
        ok 1 - 02.03 - cleanup=false
        1..1
    ok 11 - 02.03 - nested array/plain objects, multiple instances found, false # time=2.667ms
    
    # Subtest: 02.04 - mixed array and object findings
        ok 1 - 02.04.01, default cleanup
        ok 2 - 02.04.02, only=any
        ok 3 - 02.04.03, only=object, mini case
        ok 4 - 02.04.04, only=arrays
        ok 5 - 02.04.05, only=object, bigger example
        1..5
    ok 12 - 02.04 - mixed array and object findings # time=94.849ms
    
    # Subtest: 03.01 - targets all keys by value, cleanup=true
        ok 1 - 03.01
        1..1
    ok 13 - 03.01 - targets all keys by value, cleanup=true # time=7.853ms
    
    # Subtest: 03.02 - targets all keys by value, cleanup=false
        ok 1 - 03.02
        1..1
    ok 14 - 03.02 - targets all keys by value, cleanup=false # time=1.984ms
    
    # Subtest: 04.01 - deletion limited to level where non-empty "uncles" exist
        ok 1 - 04.01
        1..1
    ok 15 - 04.01 - deletion limited to level where non-empty "uncles" exist # time=3.681ms
    
    # Subtest: 04.02 - deletion of empty things is limited in arrays too
        ok 1 - 04.02
        1..1
    ok 16 - 04.02 - deletion of empty things is limited in arrays too # time=4.239ms
    
    # Subtest: 05.01 - both key and value missing - throws
        ok 1 - expected to throw
        ok 2 - should match pattern provided
        1..2
    ok 17 - 05.01 - both key and value missing - throws # time=2.173ms
    
    # Subtest: 05.02 - nonsensical options object - throws
        ok 1 - expected to throw
        ok 2 - should match pattern provided
        1..2
    ok 18 - 05.02 - nonsensical options object - throws # time=1.317ms
    
    # Subtest: 05.03 - nonsensical options object - throws
        ok 1 - expected to throw
        ok 2 - should match pattern provided
        1..2
    ok 19 - 05.03 - nonsensical options object - throws # time=1.302ms
    
    # Subtest: 05.04 - no input args - throws
        ok 1 - expected to throw
        ok 2 - should match pattern provided
        1..2
    ok 20 - 05.04 - no input args - throws # time=2.055ms
    
    # Subtest: 05.05 - wrong input args - throws
        ok 1 - expected to throw
        ok 2 - should match pattern provided
        1..2
    ok 21 - 05.05 - wrong input args - throws # time=1.681ms
    
    # Subtest: 05.06 - wrong input args - throws
        ok 1 - expected to throw
        ok 2 - should match pattern provided
        1..2
    ok 22 - 05.06 - wrong input args - throws # time=1.892ms
    
    # Subtest: 05.07 - wrong input args - throws
        ok 1 - expected to throw
        ok 2 - should match pattern provided
        1..2
    ok 23 - 05.07 - wrong input args - throws # time=1.213ms
    
    # Subtest: 06.01 - deletes from real parsed HTML
        ok 1 - 06.01
        1..1
    ok 24 - 06.01 - deletes from real parsed HTML # time=65.235ms
    
    # Subtest: 06.02 - real parsed HTML #1
        ok 1 - 06.02
        1..1
    ok 25 - 06.02 - real parsed HTML #1 # time=43.499ms
    
    # Subtest: 06.03 - real parsed HTML #2
        ok 1 - 06.03
        1..1
    ok 26 - 06.03 - real parsed HTML #2 # time=5.811ms
    
    # Subtest: 06.04 - real parsed HTML #3
        ok 1 - 06.04
        1..1
    ok 27 - 06.04 - real parsed HTML #3 # time=9.951ms
    
    # Subtest: 06.05 - real parsed HTML #4
        ok 1 - 06.05
        1..1
    ok 28 - 06.05 - real parsed HTML #4 # time=5.967ms
    
    # Subtest: 07.01 - does not mutate input args
        ok 1 - (unnamed test)
        ok 2 - 07.01
        1..2
    ok 29 - 07.01 - does not mutate input args # time=5.141ms
    
    # Subtest: 08.01 - delete a value which is empty string
        ok 1 - 08.01
        1..1
    ok 30 - 08.01 - delete a value which is empty string # time=3.24ms
    
    # Subtest: 08.02 - delete a value which is non-empty string
        ok 1 - 08.02
        1..1
    ok 31 - 08.02 - delete a value which is non-empty string # time=9.917ms
    
    # Subtest: 08.03 - delete a value which is non-empty string, with wildcards
        ok 1 - 08.03
        1..1
    ok 32 - 08.03 - delete a value which is non-empty string, with wildcards # time=4.851ms
    
    # Subtest: 08.04 - delete a value which is a non-empty string, with wildcards, only on arrays
        ok 1 - 08.04
        1..1
    ok 33 - 08.04 - delete a value which is a non-empty string, with wildcards, only on arrays # time=10.071ms
    
    # Subtest: 09.01 - wildcard deletes two keys have string values
        ok 1 - 09.01.02
        ok 2 - 09.01.02
        ok 3 - 09.01.03
        1..3
    ok 34 - 09.01 - wildcard deletes two keys have string values # time=14.481ms
    
    # Subtest: 09.02 - wildcard deletes keys with plain object values, by key
        ok 1 - 09.02
        1..1
    ok 35 - 09.02 - wildcard deletes keys with plain object values, by key # time=3.293ms
    
    # Subtest: 09.03 - wildcard delete two values, plain objects
        ok 1 - 09.03.01
        ok 2 - 09.03.02
        1..2
    ok 36 - 09.03 - wildcard delete two values, plain objects # time=16.061ms
    
    1..36
    # time=888.296ms
}

1..1
# time=3314.905ms