
m = [3000.0+34.0i 90.0+91.0i; -549.0+0.0i 2000.0+10.3i]

c = [9.0+0.0i 4000.0-912.0i; 1000.0+0.0i -200.0+0.0i]

Q = sqrtm(c)

merge_no_norm = Q^-1*m*Q^-1

[U,eir] = eig(merge_no_norm)
er = abs(diag(eir))
[ver,ier] = sort(er);

ver




% Anorm = (m - min(m))/(max(m) - min(m))

min(min(m))
max(max(m))


m_normalised = -1 + 2.*(m - min(m))./(max(m) - min(m))

c_normalised = -1 + 2.*(c - min(c))./(max(c) - min(c))

Q2 = sqrtm(c_normalised)

merge_norm = c_normalised^-1*m_normalised*c_normalised^-1


