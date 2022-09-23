import test from 'tape'

import { put, call } from 'redux-saga/effects'
import { incrementAsync, delay } from '../src/sagas'

test('incrementAsync Saga test', (assert) => {
    const gen = incrementAsync()

    //delay is called at 1000 ms
    assert.deepEqual(
        gen.next().value,
        call(delay, 1000),
        'incrementAsync Saga must call delay(1000)'
    )

    
    assert.deepEqual(
        gen.next().value,
        put({ type: 'INCREMENT', payload: 2 }),
        'incrementAsync Saga must dispatch an INCREMENT action'
    )

    assert.deepEqual(
        gen.next(),
        { done: true, value: undefined },
        'incrementAsync Saga must be done'
    )


    assert.end()

})