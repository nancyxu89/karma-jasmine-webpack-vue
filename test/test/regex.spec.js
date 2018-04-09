describe('regex.spec.js', function () {
    it('getFilter', function () {
            var arr = ['xtt', '33', '33']
            expect(getFilter(arr, '33')).toEqual(['33', '33'])
        }
    )
})