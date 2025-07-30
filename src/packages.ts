/* GENERIC NEEDED: compare 2 arrays for equivalence in values */
export function compareArray(nums1: (number | null)[], nums2: (number | null)[]): boolean {
    const m: number = nums1.length;

    if (m !== nums2.length)
        return false;

    for (let i = 0; i < m; ++i) {
        if (nums1[i] !== nums2[i])
            return false;
    }

    return true;
}