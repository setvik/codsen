TAP version 13
ok 1 - test/test.js # time=6966.76ms {
    # Subtest: 01 - monorepo
        ok 1 - should match pattern provided
        ok 2 - should match pattern provided
        ok 3 - should match pattern provided
        ok 4 - should match pattern provided
        ok 5 - should match pattern provided
        ok 6 - should match pattern provided
        ok 7 - should match pattern provided
        ok 8 - should match pattern provided
        ok 9 - should be equal
        ok 10 - should be equal
        ok 11 - should be equal
        ok 12 - should be equal
        ok 13 - expect truthy value
        1..13
    ok 1 - 01 - monorepo # time=2603.409ms
    
    # Subtest: 02 - normal repo
        ok 1 - should be equal
        ok 2 - should be equal
        ok 3 - should be equal
        ok 4 - should be equal
        ok 5 - should match pattern provided
        ok 6 - should match pattern provided
        ok 7 - should match pattern provided
        ok 8 - should match pattern provided
        1..8
    ok 2 - 02 - normal repo # time=846.28ms
    
    # Subtest: 03 - deletes deps from devdeps if they are among normal deps
        ok 1 - expect truthy value
        1..1
    ok 3 - 03 - deletes deps from devdeps if they are among normal deps # time=916.256ms
    
    # Subtest: 92 - version output mode
        ok 1 - should be equal
        ok 2 - should be equal
        1..2
    ok 4 - 92 - version output mode # time=988.053ms
    
    # Subtest: 91 - help output mode
        ok 1 - should match pattern provided
        ok 2 - should match pattern provided
        ok 3 - should match pattern provided
        ok 4 - should match pattern provided
        1..4
    ok 5 - 91 - help output mode # time=1001.736ms
    
    # Subtest: 93 - no files found in the given directory
        ok 1 - should be equal
        1..1
    ok 6 - 93 - no files found in the given directory # time=606.113ms
    
    1..6
    # time=6966.76ms
}

1..1
# time=8209.64ms